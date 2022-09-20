import neo4j from "neo4j-driver";
import "dotenv/config";

export async function connectWithDB() {
  try {
    const driver = neo4j.driver(process.env.DB_URL, neo4j.auth.basic(process.env.DB_USER, process.env.DB_PWD));
    await driver.getServerInfo();
    return {
      driver,
    };
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
  }
}
