

function filtered(board) {
    for(var i=0; i <= board.length();i++){
        if (board[i] == "K") {
            conosle.log(true)
        }else {
            console.log(board[i])
        }
    }
    
};

console.log(board(['R','N','B','Q','K','B','N','R']))
