function newSentence() {
    var sentence = "";
    var name = ["Harry", "Jan", "Jim", "Zane", "Andy", "Manny", "Bob", "Sarah"];
    var verb = ["ran to", "sat on", "threw", "jumped over", "stepped on", "walked to", "picked up"];
    var noun = ["library", "school", "hospital", "house", "baseball field", "chair", "table", "stairs"];
    sentence = sentence + name[Math.round(Math.random() * (7))] + " ";
    sentence = sentence + verb[Math.round(Math.random() * (6))] + " ";
    sentence = sentence + "the ";
    sentence = sentence + noun[Math.round(Math.random() * (7))] + ".";
    return sentence;
}

module.exports = {
    newSentence: newSentence
};
