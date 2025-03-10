const { default: axios } = require("axios");
const { sqlConnect } = require("../../config/connect");
const { response400, response200 } = require("../../lib/response-messages");
const catchAsyncError = require("../../middleware/catchAsyncError");
const { msg } = require("../../utils/constant");

//Authhors Paper's By Author Id(IFERP DB)
async function getAuthorsPaperSqlData(authorId) {
  return new Promise((resolve, reject) => {
    sqlConnect.query(
      `SELECT * FROM abstract_details WHERE user_id IN (${authorId})`,
      async (err, result, fields) => {
        if (err) {
          console.log("Error querying educational_details:", err.stack);
          reject(err);
          return;
        }
        resolve(result);
      }
    );
  });
}

async function fetchAuthorsPaper(authorId) {
  const apiUrl = `https://api.semanticscholar.org/graph/v1/author/${authorId}?fields=url,papers.abstract,papers.authors,papers.title,papers.year,papers.journal`;

  const apiKey = process.env.SEMANTIC_API_KEY;
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return response?.data ? response.data.papers : [];
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("Author not found. Returning empty array.");
      return [];
    } else {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}

const getAuthorsPaper = async (req, res) => {
  const { authorId, page = 1, limit = 4 } = req.query;

  const resultPerPage = parseInt(limit, 10) || 4;

  try {
    const skipValue = (parseInt(page, 10) || 1) - 1;
    const limitValue = resultPerPage;

    const sqlData = await getAuthorsPaperSqlData(authorId);

    const semanticAuthorsPapers = await fetchAuthorsPaper(authorId);

    const authorsPaper = [...sqlData, ...semanticAuthorsPapers];

    const totalCount = authorsPaper.length;
    const totalPages = Math.ceil(totalCount / limitValue);

    const paginatedData = authorsPaper.slice(
      skipValue * limitValue,
      (skipValue + 1) * limitValue
    );
    const pagination = {
      totalCount,
      totalPages,
      currentPage: skipValue + 1,
      limit: limitValue,
      skip: skipValue,
      nextPage: skipValue + 1 < totalPages ? skipValue + 2 : null,
      previousPage: skipValue > 0 ? skipValue : null,
    };

    return response200(res, msg.fetchSuccess, {
      papers: paginatedData || [],
      pagination,
    });
  } catch (error) {
    console.log(error, "ERROR");
    return response400(res, "Error fetching authors Papers.");
  }
};

module.exports = {
  getAuthorsPaper,
};
