const posTagger = require('wink-pos-tagger');
const tagger = posTagger();

const removeAdj = (tokens) => {
    return tokens.filter((token) => 
        token.pos.indexOf('JJ') == -1 &&
        token.pos.indexOf('RB') == -1
        // token.pos.indexOf('VBG') == -1
        )
}

/**
 * Reference to what POS tags mean:
 * https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html
 */
module.exports.parse = (req, res) => {
    tags = tagger.tagSentence(req.body.value);
    // console.log(tags.map(tag => { return {value: tag.value, pos: tag.pos}}));
    res.send(removeAdj(tags))
    // res.sendStatus(200)
}