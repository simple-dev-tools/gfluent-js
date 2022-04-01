const { GFluentBQ } = require("../src/GFluent");
const BigQuery = require("@google-cloud/bigquery");

describe("#constructor", () => {
  const mockedBigQuery = jest.spyOn(BigQuery);

  beforeAll(() => {
    jest.mock("@google-cloud/bigquery");
    mockedBigQuery.mockImplementation(() => ({}));
  });

  it("should create GFluentBQ instance with default options", async () => {
    try {
      const bqClient = new GFluentBQ("example-project-id");
    } catch (e) {
      throw e;
    }
  });
});
