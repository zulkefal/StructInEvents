import { QuestionCreated as QuestionCreatedEvent } from "../generated/StructInEvents/StructInEvents"
import { QuestionCreated } from "../generated/schema"

export function handleQuestionCreated(event: QuestionCreatedEvent): void {
  let entity = new QuestionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.question_questionType = event.params.question.questionType
  entity.question_dealSize = event.params.question.dealSize
  entity.question_noOfOracles = event.params.question.noOfOracles
  entity.question_rewardPerOracle = event.params.question.rewardPerOracle
  entity.question_loyaltyFee = event.params.question.loyaltyFee
  entity.question_priceCostPerSide = event.params.question.priceCostPerSide
  entity.question_numberOfSides = event.params.question.numberOfSides
  entity.question_creator = event.params.question.creator
  entity.question_loyalty = event.params.question.loyalty
  entity.question_totalQuestionCost = event.params.question.totalQuestionCost
  entity.question_totalRewardAmount = event.params.question.totalRewardAmount
  entity.question_sidesWhoJoined = event.params.question.sidesWhoJoined
  entity.question_startTime = event.params.question.startTime
  entity.question_endTime = event.params.question.endTime
  entity.question_totalNumberOfOption =
    event.params.question.totalNumberOfOption
  entity.question_questionURI = event.params.question.questionURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
