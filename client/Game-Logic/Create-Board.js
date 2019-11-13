

module.exports = {
    
    createBombs () {
        let bombObject = {}
        while(Object.keys(bombObject).length !== 10){
            let bombLocation = this.getBombLocation()
            let bombObjectKey = JSON.stringify(bombLocation)
            if(!bombObject.hasOwnProperty(bombObjectKey)){
                bombObject[bombObjectKey] = bombLocation;
            }
        }
        return bombObject;
    },

    getBombLocation () {
        let location = [];
        location.push(Math.floor(Math.random() * 10))
        location.push(Math.floor(Math.random() * 10))
        return location
    },

    generateEmptyBoard () {
        let board = []
        for(var i = 0 ; i < 10; i++){
            board.push(Array(10).fill(0,0,10))
        }
        return board
    },

    populateMinesweeperBoard (emptyBoard, bombLocations) {
        for(var key in bombLocations){
            let row = bombLocations[key][0];
            let column = bombLocations[key][1];
            emptyBoard[row][column] = 'Bomb'
            for(var key in this.positionModifiers){
                if(this.checkLegality(row, column, key)){
                    if(typeof emptyBoard[row + this.positionModifiers[key].rowModifier][column + this.positionModifiers[key].columnModifier] === 'number'){
                        emptyBoard[row + this.positionModifiers[key].rowModifier][column + this.positionModifiers[key].columnModifier]++
                    }
                }
            }   
        }
        return emptyBoard;
    },

    positionModifiers : {
        upperLeft : {
            rowModifier: -1,
            columnModifier: -1
        },
        above : {
            rowModifier: -1,
            columnModifier: 0
        },
        upperRight : {
            rowModifier: -1,
            columnModifier: 1
        },
        left : {
            rowModifier: 0,
            columnModifier: -1
        },
        right : {
            rowModifier: 0,
            columnModifier: 1
        },
        bottomLeft : {
            rowModifier: 1,
            columnModifier: -1
        },
        below: {
            rowModifier: 1,
            columnModifier: 0
        },
        bottomRight : {
            rowModifier: 1,
            columnModifier: 1
        }
    },

    checkLegality(row, column, identity = null){
        
        let legalColumn = true;
        let legalRow = true;
        if(identity !== null){
        let columnIncrement = this.positionModifiers[identity].columnModifier
        let rowIncrement = this.positionModifiers[identity].rowModifier
            if(columnIncrement !== 0){
                legalColumn = columnIncrement < 0 ? column + columnIncrement > -1 : column + columnIncrement < 10 
            }
            if(rowIncrement !== 0){
                legalRow = rowIncrement < 0 ? row + rowIncrement > -1 : row + rowIncrement < 10 
            }
        }else{
            legalRow = row > -1 && row < 10
            legalColumn = column > -1 && column < 10
        }
        
        return (legalRow === true && legalColumn === true);
    },

    generateMinesweeperBoard () {
        let bombLocations = this.createBombs();
        let emptyBoard = this.generateEmptyBoard();
        let minesweeper = this.populateMinesweeperBoard(emptyBoard, bombLocations)
        return minesweeper

    },

    generateLocationBoard () {
        locationBoard = []
        for(var x = 0; x < 10; x++){
            let row = [];
            for(var y = 0; y < 10; y++){
                row.push(`${x}${y}`)
            }
            locationBoard.push(row);
        }
        return locationBoard;
    },

    resetBoard (board) {
        for(var x = 0; x < board.length; x++){
            for(var y = 0; y < board[x].length; y++){
                let target = document.getElementById(board[y][x])
                target.innerHTML = ""
                target.classList.remove("has-text-link")
                target.classList.remove("has-text-info")
                target.classList.remove("has-text-success")
                target.classList.remove("has-text-danger")

            }
        }
    },

    revealOtherLocations (row, column) {
        let storage = {}
        let recurse = (row, column) => {
        if(this.checkLegality(row, column)){
            let id = `${row}${column}`
            if(!storage.hasOwnProperty(id)){
                storage[id] = true;
                let target = document.getElementById(id)
                let targetValue = target.getAttribute('value')
                if( targetValue !== 'Bomb'){
                   target.innerHTML = targetValue
                   if(targetValue === '0'){
                        target.classList.add('has-text-link');
                        if(this.checkLegality(row, column, 'above')){
                            recurse(row - 1, column)
                        }
                        if(this.checkLegality(row, column, 'below')){
                            recurse(row + 1, column)
                        }
                        if(this.checkLegality(row, column, 'left')){
                            recurse(row, column - 1)
                        }
                        if(this.checkLegality(row, column, 'right')){
                            recurse(row, column + 1)
                        }
                    }
                    else if(targetValue === '1'){
                        target.classList.add('has-text-info')
                    }
                    else if(targetValue === '2'){
                        target.classList.add('has-text-success')
                    }
                    else if(targetValue >= '3' ){
                        target.classList.add('has-text-danger')
                    };
                } 
            }
        }
        }
        recurse(row, column)
    }
}