import { html } from 'lit-html';
import { updateApp } from '.';

class Subject {
  private subjectName: string;
  private subjectID: string;
  private exams: number[][];
  private marks: number[][];
  private semAvg: number[];

  constructor(subjectID: string, subjectName: string) {
    this.subjectID = subjectID;
    this.subjectName = subjectName;
    this.exams = [[], [], [], []];
    this.marks = [[], [], [], []];
    this.semAvg = [-1, -1, -1, -1];

    const storage: object | string = localStorage.getItem(subjectID);
    if (typeof storage === 'object') {
      localStorage.setItem(subjectID, JSON.stringify(this));
    } else if (typeof storage === 'string') {
      const s: Subject = JSON.parse(storage);
      this.exams = s.exams;
      this.marks = s.marks;
      this.semAvg = s.semAvg;
    }
  }

  public render(semester: number) {
    return html`
      <style>
        .subject {
          border-bottom: 1px solid #bdbdbd;
          margin: 5px 0px;
          padding: 8px;
        }
        .subject .avg {
          float: right;
        }
        .subject .subjectbody {
          padding: 8px;
        }
        .subjectbody .marktype {
          display: inline-block;
          margin: 3px 0px;
        }
        .subject input,
        .subject button {
          float: right;
        }
        .subject input {
          width: 40px;
        }
      </style>
      <div class="subject" id=${this.subjectID}>
        <b>${this.subjectName}</b>
        <span class="avg">${this.semAvg[semester - 1] < 0 ? '/' : Math.round(this.semAvg[semester - 1])}</span>
        <br />
        <div class="subjectbody">
          <div class="marktype">Klausuren:</div>
          ${this.exams[semester - 1].map(e => `${e}, `)}
          <button @click=${this.addExam(semester).bind(this)}>+</button>
          <input id=${this.subjectID + '-exInput'} type="number" />
          <br />
          Noten: ${this.marks[semester - 1].map(m => `${m}, `)}
          <button @click=${this.addMark(semester).bind(this)}>+</button>
          <input id=${this.subjectID + '-mkInput'} type="number" />
        </div>
      </div>
    `;
  }

  private calculateAvg() {
    for (let s = 0; s < 4; s++) {
      let toAvg: number[] = [];
      this.exams[s].map(e => toAvg.push(e, e));
      this.marks[s].map(m => toAvg.push(m));
      if (toAvg.length > 0) {
        const avg = toAvg.reduce((a, v) => a + v, 0) / toAvg.length;
        this.semAvg[s] = avg;
      }
    }
    localStorage.setItem(this.subjectID, JSON.stringify(this));
  }

  private addExam(sem: number) {
    return () => {
      const input: HTMLInputElement = document.querySelector('#' + this.subjectID + '-exInput');
      const newExam: number = parseInt(input.value);
      if (isNaN(newExam) === false && newExam >= 0 && newExam <= 15) {
        this.exams[sem - 1].push(newExam);
        input.value = '';
        this.calculateAvg();
        updateApp();
      }
    };
  }

  private addMark(sem: number) {
    return () => {
      const input: HTMLInputElement = document.querySelector('#' + this.subjectID + '-mkInput');
      const newMark: number = parseInt(input.value);
      if (isNaN(newMark) === false && newMark >= 0 && newMark <= 15) {
        this.marks[sem - 1].push(newMark);
        input.value = '';
        this.calculateAvg();
        updateApp();
      }
    };
  }
}

export { Subject };
