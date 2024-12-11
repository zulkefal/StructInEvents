import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import { QuestionCreated } from "../generated/StructInEvents/StructInEvents"

export function createQuestionCreatedEvent(
  question: ethereum.Tuple
): QuestionCreated {
  let questionCreatedEvent = changetype<QuestionCreated>(newMockEvent())

  questionCreatedEvent.parameters = new Array()

  questionCreatedEvent.parameters.push(
    new ethereum.EventParam("question", ethereum.Value.fromTuple(question))
  )

  return questionCreatedEvent
}
