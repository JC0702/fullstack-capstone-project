const logger = require('./logger');
const natural = require("natural");

('{/sentiment}', async (req, res) => {

    // Task 4: extract the sentence parameter
    const { sentence } = { req, : .query };


    if (!sentence) {
        logger.error('No sentence provided');
        return res.status(400).json({ error: 'No sentence provided' });
    }

    // Initialize the sentiment analyzer with the Natural's PorterStemmer and "English" language
    const Analyzer = natural.SentimentAnalyzer;
    const stemmer = natural.PorterStemmer;
    const analyzer = new Analyzer("English", stemmer, "afinn");

    // Perform sentiment analysis
    try {
        const analysisResult = analyzer.getSentiment(sentence.split(' '));

        let sentiment = "neutral";

        // Task 5: set sentiment to negative or positive based on score rules
        if (analysisResult > 0) {
            sentiment = "positive";
        } else {
            sentiment = "negative";
        }

        // Logging the result
        logger.info(`Sentiment analysis result: ${analysisResult}`);

        // Task 6: send a status code of 200 with both sentiment score and the sentiment txt in the format { sentimentScore: analysisResult, sentiment: sentiment }
        res.status(200).json({ sentimentScore: analysisResult, sentiment: sentiment });
    } catch (error) {
        logger.error(`Error performing sentiment analysis: ${error}`);
        // Task 7: if there is an error, return a HTTP code of 500 and the json {'message': 'Error performing sentiment analysis'}
        { { insert; code; here; } }
    }
});
