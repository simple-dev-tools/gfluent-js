const { BigQuery } = require('@google-cloud/bigquery');

class GFluentBQ {
  constructor(projectId) {
    this.projectId = projectId
    this.bq = new BigQuery()
  }

  async create_dataset(datasetName) {
    const [dataset] = await this.bq.createDataset(datasetName)
    console.info(`Dataset ${dataset.id} is created`)
  }
}

module.exports = {
  GFluentBQ,
}
