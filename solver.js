import {Cube} from './cube.js'

const resultDisplay = document.getElementById('result')

export class Solver {
    constructor() {
        this.c = new Cube();
        this.moveCount = 0;
        this.solution = [];
        this.result = [];
        this.pos = 0;
        this.posInSolution = 0;

        this.c.getState()
    }

    printNext() {
        const cubeImage = document.createElement('img');
        const solverImage = document.querySelector('#cubeImage');
        
        let move;
        let attribute;
        switch(this.result[this.posInSolution]) {
            case 0: 
                move = "U"; 
                attribute = 'images/U.png'; break;
            case 1: 
                move = "R"; 
                attribute = 'images/R.png'; break;
            case 2: 
                move = "F"; 
                attribute = 'images/F.png'; break;
            case 3: 
                move = "D"; 
                attribute = 'images/D.png'; break;
            case 4: 
                move = "L"; 
                attribute = 'images/L.png'; break;
            case 5: 
                move = "B"; 
                attribute = 'images/B.png'; break;
            case 6: 
                move = "U\'"; 
                attribute = 'images/Uprime.png'; break;
            case 7: 
                move = "R\'"; 
                attribute = 'images/Rprime.png'; break;
            case 8: 
                move = "F\'"; 
                attribute = 'images/Fprime.png'; break;
            case 9: 
                move = "D\'"; 
                attribute = 'images/Dprime.png'; break;
            case 10: 
                move = "L\'"; 
                attribute = 'images/Lprime.png'; break;
            case 11: 
                move = "B\'"; 
                attribute = 'images/Bprime.png'; break;
            case 12: 
                move = "U2"; 
                attribute = 'images/U2.png'; break;
            case 13: 
                move = "R2"; 
                attribute = 'images/R2.png'; break;
            case 14: 
                move = "F2"; 
                attribute = 'images/F2.png'; break;
            case 15: 
                move = "D2"; 
                attribute = 'images/D2.png'; break;
            case 16: 
                move = "L2"; 
                attribute = 'images/L2.png'; break;
            case 17: 
                move = "B2"; 
                attribute = 'images/B2.png'; break;
        }
        if (this.posInSolution == this.result.length) {
            resultDisplay.innerHTML = 'Solved!';
            solverImage.removeChild(solverImage.firstElementChild);
            return 1;
        }
        cubeImage.setAttribute('src',attribute);
        if (this.posInSolution > 0) 
            solverImage.removeChild(solverImage.firstElementChild);
        solverImage.appendChild(cubeImage);
    
        resultDisplay.innerHTML = move;
        this.posInSolution++;
        return 0;
    }

    addToResult() {
        for (let i = 0; i < this.pos; ++i) {
            this.result.push(this.solution[i]);
        }
    }

    reduceSolution() {
        for(let i = 0; i < this.result.length - 1; i++) {
            // R2 R2 or R R' or R' R
            if ((this.result[i] >= 12 && this.result[i] == this.result[i+1]) || (this.result[i] < 12 && this.result[i+1] < 12 && Math.abs(this.result[i] - this.result[i+1]) == 6))  {
                for(let j = i + 2; j < this.result.length; j++) {
                    this.result[j - 2] = this.result[j];
                }
                this.result.pop();
                this.result.pop();
            }
            // R R or R' R'
            else if (this.result[i] == this.result[i+1]) {
                if (this.result[i] < 6) this.result[i] += 12;
                else this.result[i] += 6;
                for(let j = i + 2; j < this.result.length; j++) {
                    this.result[j - 1] = this.result[j];
                }
                this.result.pop();
            }
            // R R2 or R2 R
            else if (Math.abs(this.result[i] - this.result[i+1]) == 12) {
                this.result[i] = Math.min(this.result[i],this.result[i+1]) + 6;
                for(let j = i + 2; j < this.result.length; j++) {
                    this.result[j - 1] = this.result[j];
                }
                this.result.pop();
            }
            // R' R2 or R2 R'
            else if (Math.max(this.result[i],this.result[i+1]) >= 12 && Math.abs(this.result[i] - this.result[i+1]) == 6) {
                this.result[i] = Math.min(this.result[i],this.result[i+1]) - 6;
                for(let j = i + 2; j < this.result.length; j++) {
                    this.result[j - 1] = this.result[j];
                }
                this.result.pop();
            }
        }
    }

    performMove(id) {
        switch(id) {
            case 0: this.c.u(); break;
            case 1: this.c.r(); break;
            case 2: this.c.f(); break;
            case 3: this.c.d(); break;
            case 4: this.c.l(); break;
            case 5: this.c.b(); break;
            case 6: this.c.uPrime(); break;
            case 7: this.c.rPrime(); break;
            case 8: this.c.fPrime(); break;
            case 9: this.c.dPrime(); break;
            case 10: this.c.lPrime(); break;
            case 11: this.c.bPrime(); break;
            case 12: this.c.u2(); break;
            case 13: this.c.r2(); break;
            case 14: this.c.f2(); break;
            case 15: this.c.d2(); break;
            case 16: this.c.l2(); break;
            case 17: this.c.b2(); break;
        }
    }

    reverseMove(id) {
        switch(id) {
            case 0: this.c.uPrime(); break;
            case 1: this.c.rPrime(); break;
            case 2: this.c.fPrime(); break;
            case 3: this.c.dPrime(); break;
            case 4: this.c.lPrime(); break;
            case 5: this.c.bPrime(); break;
            case 6: this.c.u(); break;
            case 7: this.c.r(); break;
            case 8: this.c.f(); break;
            case 9: this.c.d(); break;
            case 10: this.c.l(); break;
            case 11: this.c.b(); break;
            case 12: this.c.u2(); break;
            case 13: this.c.r2(); break;
            case 14: this.c.f2(); break;
            case 15: this.c.d2(); break;
            case 16: this.c.l2(); break;
            case 17: this.c.b2(); break;
        }
    }

    performAlgorithm() {
        let alg = [3,13,12,14,6,13,12,13,14,9,13];
        for (let i = 0; i < 11; ++i) {
            this.performMove(alg[i]);
            this.solution[this.pos] = alg[i];
            ++this.pos;
        }
            if (this.c.checkState(5)) {
            this.addToResult(5);
            this.pos = 0;
            this.moveCount += 11;
            return true;
        }
        this.pos = 0;
        return false;
    }

    prune(id, lastMove, state) {
        if (state != 0 && (id == 2 || id == 5 || id == 8 || id == 11)) return true;
        if ((state != 0 && state != 1) && (id == 1 || id == 4 || id == 7 || id == 10)) return true;
        if (state >= 6 && (id == 0 || id == 3 || id == 6 || id == 9)) return true;
        if ((id >= 0 && id <= 2) || (id >= 6 && id <= 8) || (id >= 12 && id <= 14)) {
            if (lastMove % 3 == id % 3) {
                return true;
            }
            return false;
        } else if (lastMove != 18 && lastMove % 6 == id % 6) {
            return true;
        }
        return false;
    }

    recursive_solve(state, n = 15, lastMove = 18) {
        for(let i = 1; i < n + 1; ++i) {
            for (let k = 0; k < 18; ++k) {
                if (this.prune(k, lastMove, state)) continue;
                this.performMove(k);
                this.solution[this.pos] = k;
                ++this.pos;
                if (i == 1 && this.c.checkState(state)) {
                    this.addToResult(state);
                    this.moveCount += this.pos;
                    this.pos = 0;
                    return true;
                }
                if (this.recursive_solve(state, i - 1, k)) {
                    return true;
                }
                --this.pos;
                this.reverseMove(k);
                }
        }
        return false;
    }

    solve() {
        for(let i = 0; i < 7; ++i) {
            if (this.c.checkState(i)) {
                this.addToResult(i);
            } else if (i == 5) {
                if (!this.performAlgorithm()) {
                    this.recursive_solve(5);
                }
            } else {
                this.recursive_solve(i);
            }
        }
        return this.moveCount;
    }
}