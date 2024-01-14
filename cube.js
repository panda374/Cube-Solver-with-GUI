
import {whiteSide, orangeSide, greenSide, redSide, blueSide, yellowSide} from './app.js'

const swapElements = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

export class Cube {
    constructor() {
         this.edges = [
            {index: 0, orientation: 0},
            {index: 1, orientation: 0},
            {index: 2, orientation: 0},
            {index: 3, orientation: 0},
            {index: 4, orientation: 0},
            {index: 5, orientation: 0},
            {index: 6, orientation: 0},
            {index: 7, orientation: 0},
            {index: 8, orientation: 0},
            {index: 9, orientation: 0},
            {index: 10, orientation: 0},
            {index: 11, orientation: 0}
        ]
         this.corners = [
            {index: 0, orientation: 0},
            {index: 1, orientation: 0},
            {index: 2, orientation: 0},
            {index: 3, orientation: 0},
            {index: 4, orientation: 0},
            {index: 5, orientation: 0},
            {index: 6, orientation: 0},
            {index: 7, orientation: 0}
        ]
    }

    getState() {
        let cornerColors = [
            [whiteSide[0].color, orangeSide[0].color, blueSide[2].color],
            [whiteSide[2].color, blueSide[0].color, redSide[2].color],
            [whiteSide[8].color, redSide[0].color, greenSide[2].color],
            [whiteSide[6].color, greenSide[0].color, orangeSide[2].color],
            [yellowSide[0].color, orangeSide[8].color, greenSide[6].color],
            [yellowSide[2].color, greenSide[8].color, redSide[6].color],
            [yellowSide[8].color, redSide[8].color, blueSide[6].color],
            [yellowSide[6].color, blueSide[8].color, orangeSide[6].color]
        ]
        let edgeColors = [
            [whiteSide[1].color, blueSide[1].color],
            [whiteSide[5].color, redSide[1].color],
            [whiteSide[7].color, greenSide[1].color],
            [whiteSide[3].color, orangeSide[1].color],
            [greenSide[5].color, redSide[3].color],
            [greenSide[3].color, orangeSide[5].color],
            [blueSide[5].color, orangeSide[3].color],
            [blueSide[3].color, redSide[5].color],
            [yellowSide[1].color, greenSide[7].color],
            [yellowSide[5].color, redSide[7].color],
            [yellowSide[7].color, blueSide[7].color],
            [yellowSide[3].color, orangeSide[7].color]
        ]
        let i = 0
        for(let corner of cornerColors) {
            if (corner[0] == 'white' && corner[1] == 'orange' && corner[2] == 'blue') {
                this.corners[i].index = 0
                this.corners[i].orientation = 0
            }
            else if (corner[0] == 'blue' && corner[1] == 'white' && corner[2] == 'orange') {
                this.corners[i].index = 0
                this.corners[i].orientation = 1
            }
            else if (corner[0] == 'orange' && corner[1] == 'blue' && corner[2] == 'white') {
                this.corners[i].index = 0
                this.corners[i].orientation = 2
            }
            else if (corner[0] == 'white' && corner[1] == 'blue' && corner[2] == 'red') {
                this.corners[i].index = 1
                this.corners[i].orientation = 0
            }
            else if (corner[0] == 'red' && corner[1] == 'white' && corner[2] == 'blue') {
                this.corners[i].index = 1
                this.corners[i].orientation = 1
            }
            else if (corner[0] == 'blue' && corner[1] == 'red' && corner[2] == 'white') {
                this.corners[i].index = 1
                this.corners[i].orientation = 2
            }
            else if (corner[0] == 'white' && corner[1] == 'red' && corner[2] == 'green') {
                this.corners[i].index = 2
                this.corners[i].orientation = 0
            }
            else if (corner[0] == 'green' && corner[1] == 'white' && corner[2] == 'red') {
                this.corners[i].index = 2
                this.corners[i].orientation = 1
            }
            else if (corner[0] == 'red' && corner[1] == 'green' && corner[2] == 'white') {
                this.corners[i].index = 2
                this.corners[i].orientation = 2
            }
            else if (corner[0] == 'white' && corner[1] == 'green' && corner[2] == 'orange') {
                this.corners[i].index = 3
                this.corners[i].orientation = 0
            }
            else if (corner[0] == 'orange' && corner[1] == 'white' && corner[2] == 'green') {
                this.corners[i].index = 3
                this.corners[i].orientation = 1
            }
            else if (corner[0] == 'green' && corner[1] == 'orange' && corner[2] == 'white') {
                this.corners[i].index = 3
                this.corners[i].orientation = 2
            }
            else if (corner[0] == 'yellow' && corner[1] == 'orange' && corner[2] == 'green') {
                this.corners[i].index = 4
                this.corners[i].orientation = 0
            }
            else if (corner[0] == 'green' && corner[1] == 'yellow' && corner[2] == 'orange') {
                this.corners[i].index = 4
                this.corners[i].orientation = 1
            }
            else if (corner[0] == 'orange' && corner[1] == 'green' && corner[2] == 'yellow') {
                this.corners[i].index = 4
                this.corners[i].orientation = 2
            }
            else if (corner[0] == 'yellow' && corner[1] == 'green' && corner[2] == 'red') {
                this.corners[i].index = 5
                this.corners[i].orientation = 0
            }
            else if (corner[0] == 'red' && corner[1] == 'yellow' && corner[2] == 'green') {
                this.corners[i].index = 5
                this.corners[i].orientation = 1
            }
            else if (corner[0] == 'green' && corner[1] == 'red' && corner[2] == 'yellow') {
                this.corners[i].index = 5
                this.corners[i].orientation = 2
            }
            else if (corner[0] == 'yellow' && corner[1] == 'red' && corner[2] == 'blue') {
                this.corners[i].index = 6
                this.corners[i].orientation = 0
            }
            else if (corner[0] == 'blue' && corner[1] == 'yellow' && corner[2] == 'red') {
                this.corners[i].index = 6
                this.corners[i].orientation = 1
            }
            else if (corner[0] == 'red' && corner[1] == 'blue' && corner[2] == 'yellow') {
                this.corners[i].index = 6
                this.corners[i].orientation = 2
            }
            else if (corner[0] == 'yellow' && corner[1] == 'blue' && corner[2] == 'orange') {
                this.corners[i].index = 7
                this.corners[i].orientation = 0
            }
            else if (corner[0] == 'orange' && corner[1] == 'yellow' && corner[2] == 'blue') {
                this.corners[i].index = 7
                this.corners[i].orientation = 1
            }
            else if (corner[0] == 'blue' && corner[1] == 'orange' && corner[2] == 'yellow') {
                this.corners[i].index = 7
                this.corners[i].orientation = 2
            }
            else throw 0;
            i++
        }

        i = 0
        for(let edge of edgeColors) {
            if (edge[0] == 'white' && edge[1] == 'blue') {
                this.edges[i].index = 0
                this.edges[i].orientation = 0
            }
            else if (edge[0] == 'blue' && edge[1] == 'white') {
                this.edges[i].index = 0
                this.edges[i].orientation = 1
            }
            else if (edge[0] == 'white' && edge[1] == 'red') {
                this.edges[i].index = 1
                this.edges[i].orientation = 0
            }
            else if (edge[0] == 'red' && edge[1] == 'white') {
                this.edges[i].index = 1
                this.edges[i].orientation = 1
            }
            else if (edge[0] == 'white' && edge[1] == 'green') {
                this.edges[i].index = 2
                this.edges[i].orientation = 0
            }
            else if (edge[0] == 'green' && edge[1] == 'white') {
                this.edges[i].index = 2
                this.edges[i].orientation = 1
            }
            else if (edge[0] == 'white' && edge[1] == 'orange') {
                this.edges[i].index = 3
                this.edges[i].orientation = 0
            }
            else if (edge[0] == 'orange' && edge[1] == 'white') {
                this.edges[i].index = 3
                this.edges[i].orientation = 1
            }
            else if (edge[0] == 'green' && edge[1] == 'red') {
                this.edges[i].index = 4
                this.edges[i].orientation = 0
            }
            else if (edge[0] == 'red' && edge[1] == 'green') {
                this.edges[i].index = 4
                this.edges[i].orientation = 1
            }
            else if (edge[0] == 'green' && edge[1] == 'orange') {
                this.edges[i].index = 5
                this.edges[i].orientation = 0
            }
            else if (edge[0] == 'orange' && edge[1] == 'green') {
                this.edges[i].index = 5
                this.edges[i].orientation = 1
            }
            else if (edge[0] == 'blue' && edge[1] == 'orange') {
                this.edges[i].index = 6
                this.edges[i].orientation = 0
            }
            else if (edge[0] == 'orange' && edge[1] == 'blue') {
                this.edges[i].index = 6
                this.edges[i].orientation = 1
            }
            else if (edge[0] == 'blue' && edge[1] == 'red') {
                this.edges[i].index = 7
                this.edges[i].orientation = 0
            }
            else if (edge[0] == 'red' && edge[1] == 'blue') {
                this.edges[i].index = 7
                this.edges[i].orientation = 1
            }
            else if (edge[0] == 'yellow' && edge[1] == 'green') {
                this.edges[i].index = 8
                this.edges[i].orientation = 0
            }
            else if (edge[0] == 'green' && edge[1] == 'yellow') {
                this.edges[i].index = 8
                this.edges[i].orientation = 1
            }
            else if (edge[0] == 'yellow' && edge[1] == 'red') {
                this.edges[i].index = 9
                this.edges[i].orientation = 0
            }
            else if (edge[0] == 'red' && edge[1] == 'yellow') {
                this.edges[i].index = 9
                this.edges[i].orientation = 1
            }
            else if (edge[0] == 'yellow' && edge[1] == 'blue') {
                this.edges[i].index = 10
                this.edges[i].orientation = 0
            }
            else if (edge[0] == 'blue' && edge[1] == 'yellow') {
                this.edges[i].index = 10
                this.edges[i].orientation = 1
            }
            else if (edge[0] == 'yellow' && edge[1] == 'orange') {
                this.edges[i].index = 11
                this.edges[i].orientation = 0
            }
            else if (edge[0] == 'orange' && edge[1] == 'yellow') {
                this.edges[i].index = 11
                this.edges[i].orientation = 1
            }
            else throw 0
            i++
        }
    }

    updateCornerOrientation(id, amount) {
        this.corners[id].orientation += amount;
        this.corners[id].orientation %= 3;
    }
   
    updateEdgeOrientation(id) {
        this.edges[id].orientation ^= 1;
    }

    u() {
        let temp = this.corners[0];
        this.corners[0] = this.corners[3];
        this.corners[3] = this.corners[2];
        this.corners[2] = this.corners[1];
        this.corners[1] = temp;
   
        let temp2 = this.edges[0];
        this.edges[0] = this.edges[3];
        this.edges[3] = this.edges[2];
        this.edges[2] = this.edges[1];
        this.edges[1] = temp2;
   }

    uPrime() {
        let temp = this.corners[1];
        this.corners[1] = this.corners[2];
        this.corners[2] = this.corners[3];
        this.corners[3] = this.corners[0];
        this.corners[0] = temp;

        let temp2 = this.edges[1];
        this.edges[1] = this.edges[2];
        this.edges[2] = this.edges[3];
        this.edges[3] = this.edges[0];
        this.edges[0] = temp2;
    }
    
    u2() {
        swapElements(this.corners, 0, 2);
        swapElements(this.corners, 1, 3);
        
        swapElements(this.edges, 0, 2);
        swapElements(this.edges, 1, 3);
    }

    d() {
        let temp = this.corners[4];
        this.corners[4] = this.corners[7];
        this.corners[7] = this.corners[6];
        this.corners[6] = this.corners[5];
        this.corners[5] = temp;
   
        let temp2 = this.edges[8];
        this.edges[8] = this.edges[11];
        this.edges[11] = this.edges[10];
        this.edges[10] = this.edges[9];
        this.edges[9] = temp2;
   }

    dPrime() {
        let temp = this.corners[5];
        this.corners[5] = this.corners[6];
        this.corners[6] = this.corners[7];
        this.corners[7] = this.corners[4];
        this.corners[4] = temp;

        let temp2 = this.edges[9];
        this.edges[9] = this.edges[10];
        this.edges[10] = this.edges[11];
        this.edges[11] = this.edges[8];
        this.edges[8] = temp2;
    }
    
    d2() {
        swapElements(this.corners, 4, 6);
        swapElements(this.corners, 5, 7);
        
        swapElements(this.edges, 8, 10);
        swapElements(this.edges, 9, 11);
    }

    r() {
        let temp = this.corners[1];
        this.corners[1] = this.corners[2];
        this.corners[2] = this.corners[5];
        this.corners[5] = this.corners[6];
        this.corners[6] = temp;
   
        let temp2 = this.edges[1];
        this.edges[1] = this.edges[4];
        this.edges[4] = this.edges[9];
        this.edges[9] = this.edges[7];
        this.edges[7] = temp2;
        this.updateCornerOrientation(6,2);
        this.updateCornerOrientation(5,1);
        this.updateCornerOrientation(2,2);
        this.updateCornerOrientation(1,1);
   }

    rPrime() {
        let temp = this.corners[6];
        this.corners[6] = this.corners[5];
        this.corners[5] = this.corners[2];
        this.corners[2] = this.corners[1];
        this.corners[1] = temp;

        let temp2 = this.edges[7];
        this.edges[7] = this.edges[9];
        this.edges[9] = this.edges[4];
        this.edges[4] = this.edges[1];
        this.edges[1] = temp2;
        this.updateCornerOrientation(6,2);
        this.updateCornerOrientation(5,1);
        this.updateCornerOrientation(2,2);
        this.updateCornerOrientation(1,1);
    }
    
    r2() {
        swapElements(this.corners, 1, 5);
        swapElements(this.corners, 2, 6);
        
        swapElements(this.edges, 1, 9);
        swapElements(this.edges, 4, 7);
    }

    l() {
        let temp = this.corners[0];
        this.corners[0] = this.corners[7];
        this.corners[7] = this.corners[4];
        this.corners[4] = this.corners[3];
        this.corners[3] = temp;
   
        let temp2 = this.edges[3];
        this.edges[3] = this.edges[6];
        this.edges[6] = this.edges[11];
        this.edges[11] = this.edges[5];
        this.edges[5] = temp2;
        this.updateCornerOrientation(7,1);
        this.updateCornerOrientation(4,2);
        this.updateCornerOrientation(3,1);
        this.updateCornerOrientation(0,2);
   }

    lPrime() {
        let temp = this.corners[3];
        this.corners[3] = this.corners[4];
        this.corners[4] = this.corners[7];
        this.corners[7] = this.corners[0];
        this.corners[0] = temp;

        let temp2 = this.edges[5];
        this.edges[5] = this.edges[11];
        this.edges[11] = this.edges[6];
        this.edges[6] = this.edges[3];
        this.edges[3] = temp2;
        this.updateCornerOrientation(7,1);
        this.updateCornerOrientation(4,2);
        this.updateCornerOrientation(3,1);
        this.updateCornerOrientation(0,2);
    }
    
    l2() {
        swapElements(this.corners, 0, 4);
        swapElements(this.corners, 3, 7);
        
        swapElements(this.edges, 3, 11);
        swapElements(this.edges, 5, 6);
    }

    f() {
        let temp = this.corners[3];
        this.corners[3] = this.corners[4];
        this.corners[4] = this.corners[5];
        this.corners[5] = this.corners[2];
        this.corners[2] = temp;
   
        let temp2 = this.edges[2];
        this.edges[2] = this.edges[5];
        this.edges[5] = this.edges[8];
        this.edges[8] = this.edges[4];
        this.edges[4] = temp2;
        this.updateCornerOrientation(3,2);
        this.updateCornerOrientation(2,1);
        this.updateCornerOrientation(5,2);
        this.updateCornerOrientation(4,1);
   
        this.updateEdgeOrientation(2);
        this.updateEdgeOrientation(5);
        this.updateEdgeOrientation(8);
        this.updateEdgeOrientation(4);
   }

    fPrime() {
        let temp = this.corners[2];
        this.corners[2] = this.corners[5];
        this.corners[5] = this.corners[4];
        this.corners[4] = this.corners[3];
        this.corners[3] = temp;

        let temp2 = this.edges[4];
        this.edges[4] = this.edges[8];
        this.edges[8] = this.edges[5];
        this.edges[5] = this.edges[2];
        this.edges[2] = temp2;
        this.updateCornerOrientation(3,2);
        this.updateCornerOrientation(2,1);
        this.updateCornerOrientation(5,2);
        this.updateCornerOrientation(4,1);
   
        this.updateEdgeOrientation(2);
        this.updateEdgeOrientation(5);
        this.updateEdgeOrientation(8);
        this.updateEdgeOrientation(4);
    }
    
    f2() {
        swapElements(this.corners, 3, 5);
        swapElements(this.corners, 2, 4);
        
        swapElements(this.edges, 2, 8);
        swapElements(this.edges, 4, 5);
    }
    
    b() {
        let temp = this.corners[1];
        this.corners[1] = this.corners[6];
        this.corners[6] = this.corners[7];
        this.corners[7] = this.corners[0];
        this.corners[0] = temp;
   
        let temp2 = this.edges[0];
        this.edges[0] = this.edges[7];
        this.edges[7] = this.edges[10];
        this.edges[10] = this.edges[6];
        this.edges[6] = temp2;
        this.updateCornerOrientation(0,1);
        this.updateCornerOrientation(1,2);
        this.updateCornerOrientation(6,1);
        this.updateCornerOrientation(7,2);
   
        this.updateEdgeOrientation(0);
        this.updateEdgeOrientation(7);
        this.updateEdgeOrientation(10);
        this.updateEdgeOrientation(6);
   }

    bPrime() {
        let temp = this.corners[0];
        this.corners[0] = this.corners[7];
        this.corners[7] = this.corners[6];
        this.corners[6] = this.corners[1];
        this.corners[1] = temp;

        let temp2 = this.edges[6];
        this.edges[6] = this.edges[10];
        this.edges[10] = this.edges[7];
        this.edges[7] = this.edges[0];
        this.edges[0] = temp2;
        this.updateCornerOrientation(6,1);
        this.updateCornerOrientation(7,2);
        this.updateCornerOrientation(0,1);
        this.updateCornerOrientation(1,2);
   
        this.updateEdgeOrientation(0);
        this.updateEdgeOrientation(7);
        this.updateEdgeOrientation(10);
        this.updateEdgeOrientation(6);
    }
    
    b2() {
        swapElements(this.corners, 0, 6);
        swapElements(this.corners, 1, 7);
        
        swapElements(this.edges, 0, 10);
        swapElements(this.edges, 6, 7);
    }

    // States

    goodEdges() {
        for (let i = 0; i < 12; ++i) {
            if (this.edges[i].orientation != 0) 
                return false;
        }
        return true;
    }

    cross() {
        for (let i = 8; i < 12; ++i) {
            if (this.edges[i].index != i || this.edges[i].orientation != 0) {
                return false;
            }
        }
        return true;
    }

    pair1() {
        if (this.edges[5].index == 5 && this.edges[5].orientation == 0 && this.corners[4].index == 4 && this.corners[4].orientation == 0) {
            return true;
        }
        return false;
    } 

    pair2() {
        if (this.edges[4].index == 4 && this.edges[4].orientation == 0 && this.corners[5].index == 5 && this.corners[5].orientation == 0) {
            return true;
        }
        return false;
    }

    pair3() {
        if (this.edges[7].index == 7 && this.edges[7].orientation == 0 && this.corners[6].index == 6 && this.corners[6].orientation == 0) {
            return true;
        }
        return false;
    }

    pair4() {
        if (this.edges[6].index == 6 && this.edges[6].orientation == 0 && this.corners[7].index == 7 && this.corners[7].orientation == 0) {
            return true;
        }
        return false;
    }

    yellowSide() {
        for (let i = 0; i < 4; ++i) {
            if (this.corners[i].orientation != 0) {
                return false;
            }
        }
        return true;
    }

    group1() {
        for (let i = 0; i < 8; ++i) {
            if (this.corners[i].orientation != 0) {
                return false;
            }
        }
        if ((this.edges[4].index == 4 || this.edges[4].index == 5 || this.edges[4].index == 6 || this.edges[4].index == 7) &&
            (this.edges[5].index == 4 || this.edges[5].index == 5 || this.edges[5].index == 6 || this.edges[5].index == 7) &&
            (this.edges[6].index == 4 || this.edges[6].index == 5 || this.edges[6].index == 6 || this.edges[6].index == 7) &&
            (this.edges[7].index == 4 || this.edges[7].index == 5 || this.edges[7].index == 6 || this.edges[7].index == 7)) {
            return true;
        }
        return false;
    }

    group2_1() {
        for (let i = 0; i < 8; ++i) {
            if (this.corners[i].index % 2 != i % 2) {
                return false;
            }
        }
        if ((this.edges[4].index == 4 || this.edges[4].index == 5 || this.edges[4].index == 6 || this.edges[4].index == 7) &&
            (this.edges[5].index == 4 || this.edges[5].index == 5 || this.edges[5].index == 6 || this.edges[5].index == 7) &&
            (this.edges[6].index == 4 || this.edges[6].index == 5 || this.edges[6].index == 6 || this.edges[6].index == 7) &&
            (this.edges[7].index == 4 || this.edges[7].index == 5 || this.edges[7].index == 6 || this.edges[7].index == 7)) {
               return true;
            }
        return false;
    }

    group2_2() {
        for (let i = 0; i < 8; ++i) {
            if (this.corners[i].index % 2 != i % 2) {
                return false;
            }
        }
        if ((this.edges[1].index == 1 || this.edges[1].index == 3 || this.edges[1].index == 9 || this.edges[1].index == 11) &&
            (this.edges[3].index == 1 || this.edges[3].index == 3 || this.edges[3].index == 9 || this.edges[3].index == 11) &&
            (this.edges[9].index == 1 || this.edges[9].index == 3 || this.edges[9].index == 9 || this.edges[9].index == 11) &&
            (this.edges[11].index == 1 || this.edges[11].index == 3 || this.edges[11].index == 9 || this.edges[11].index == 11) &&
    
            (this.edges[4].index == 4 || this.edges[4].index == 5 || this.edges[4].index == 6 || this.edges[4].index == 7) &&
            (this.edges[5].index == 4 || this.edges[5].index == 5 || this.edges[5].index == 6 || this.edges[5].index == 7) &&
            (this.edges[6].index == 4 || this.edges[6].index == 5 || this.edges[6].index == 6 || this.edges[6].index == 7) &&
            (this.edges[7].index == 4 || this.edges[7].index == 5 || this.edges[7].index == 6 || this.edges[7].index == 7))
                return true;
        return false;
    }

    group3_1() {
        for (let i = 0; i < 8; ++i) {
            if (this.corners[i].index % 2 != i % 2) {
                return false;
            }
        }
        for (let i = 0; i < 4; i += 2) {
            if (this.corners[i].index != this.corners[i+1].index - 1) {
                return false;
            }
        }
        if ((this.edges[1].index == 1 || this.edges[1].index == 3 || this.edges[1].index == 9 || this.edges[1].index == 11) &&
            (this.edges[3].index == 1 || this.edges[3].index == 3 || this.edges[3].index == 9 || this.edges[3].index == 11) &&
            (this.edges[9].index == 1 || this.edges[9].index == 3 || this.edges[9].index == 9 || this.edges[9].index == 11) &&
            (this.edges[11].index == 1 || this.edges[11].index == 3 || this.edges[11].index == 9 || this.edges[11].index == 11) &&
    
            (this.edges[4].index == 4 || this.edges[4].index == 5 || this.edges[4].index == 6 || this.edges[4].index == 7) &&
            (this.edges[5].index == 4 || this.edges[5].index == 5 || this.edges[5].index == 6 || this.edges[5].index == 7) &&
            (this.edges[6].index == 4 || this.edges[6].index == 5 || this.edges[6].index == 6 || this.edges[6].index == 7) &&
            (this.edges[7].index == 4 || this.edges[7].index == 5 || this.edges[7].index == 6 || this.edges[7].index == 7))
                return true;
        return false;
    }

    group3_2() {
        for (let i = 0; i < 8; i += 2) {
            if (this.corners[i].index != this.corners[i+1].index - 1) {
                return false;
            }
        }
        if ((this.edges[1].index == 1 || this.edges[1].index == 3 || this.edges[1].index == 9 || this.edges[1].index == 11) &&
            (this.edges[3].index == 1 || this.edges[3].index == 3 || this.edges[3].index == 9 || this.edges[3].index == 11) &&
            (this.edges[9].index == 1 || this.edges[9].index == 3 || this.edges[9].index == 9 || this.edges[9].index == 11) &&
            (this.edges[11].index == 1 || this.edges[11].index == 3 || this.edges[11].index == 9 || this.edges[11].index == 11) &&
    
            (this.edges[4].index == 4 || this.edges[4].index == 5 || this.edges[4].index == 6 || this.edges[4].index == 7) &&
            (this.edges[5].index == 4 || this.edges[5].index == 5 || this.edges[5].index == 6 || this.edges[5].index == 7) &&
            (this.edges[6].index == 4 || this.edges[6].index == 5 || this.edges[6].index == 6 || this.edges[6].index == 7) &&
            (this.edges[7].index == 4 || this.edges[7].index == 5 || this.edges[7].index == 6 || this.edges[7].index == 7))
                return true;
        return false;
    }

    cornersPermutated() {
        for (let i = 4; i < 12; ++i) {
            if (this.edges[i].index != i) {
                return false;
            }
        }
        for (let i = 0; i < 8; ++i) {
            if (this.corners[i].index != i) {
                return false;
            }
        }
        return true;
    }

    solved() {
        for (let i = 0; i < 12; ++i) {
            if (this.edges[i].index != i) {
                return false;
            }
        }
        for (let i = 0; i < 8; ++i) {
            if (this.corners[i].index != i) {
                return false;
            }
        }
        return true;
    }

    checkState(id) {
        switch(id) {
            case 0:
                return this.goodEdges(); break;
            case 1:
                return this.group1(); break;
            case 2:
                return this.group2_1(); break;
            case 3:
                return this.group2_2(); break;
            case 4:
                return this.group3_1(); break;
            case 5:
                return this.group3_2(); break;
            case 6:
                return this.solved(); break;
        }
        return false;
    }

    // copy constructor and copy operator
}

