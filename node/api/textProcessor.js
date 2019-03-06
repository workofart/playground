const natural = require('natural')

const language = 'EN';
const defaultCategory = 'N';
const defaultCategoryCapitalized = 'NNP';
const basePath = './node_modules/natural/lib/natural/brill_pos_tagger/data/English/';

var lexicon = new natural.Lexicon(basePath + '/lexicon_from_posjs.json', defaultCategory, defaultCategoryCapitalized);
var ruleSet = new natural.RuleSet(basePath + 'tr_from_posjs.txt');

const removeAdj = (tokens) => {
    return tokens.filter((token) => token.tag != 'JJ' && token.tag != 'RB')
}

/**
 * Reference to what POS tags mean:
 * https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html
 */
module.exports.parse = (req, res) => {
    var tagger = new natural.BrillPOSTagger(lexicon, ruleSet);
    // console.log(tagger.tag(sentence));
    var tokenizer = new natural.WordTokenizer();

    // console.log(req);
    res.send(removeAdj(tagger.tag(tokenizer.tokenize(req.body.value)).taggedWords))
    // res.sendStatus(200)
}