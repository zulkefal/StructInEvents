import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import {} from "@graphprotocol/graph-ts"
import { QuestionCreated } from "../generated/schema"
import { QuestionCreated as QuestionCreatedEvent } from "../generated/StructInEvents/StructInEvents"
import { handleQuestionCreated } from "../src/struct-in-events"
import { createQuestionCreatedEvent } from "./struct-in-events-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let question = "ethereum.Tuple Not implemented"
    let newQuestionCreatedEvent = createQuestionCreatedEvent(question)
    handleQuestionCreated(newQuestionCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("QuestionCreated created and stored", () => {
    assert.entityCount("QuestionCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "QuestionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "question",
      "ethereum.Tuple Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
