// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract StructInEvents {
    enum QuestionTypes {
        DataRequest,
        Survey,
        Dispute,
        MiniDispute,
        ExternalSource
    }

    struct Question {
        QuestionTypes questionType;
        uint256 dealSize;
        uint256 noOfOracles;
        uint256 rewardPerOracle;
        uint256 loyaltyFee;
        uint256 priceCostPerSide;
        uint256 numberOfSides;
        address creator;
        bool loyalty;
        uint256 totalQuestionCost;
        uint256 totalRewardAmount;
        uint256 sidesWhoJoined;
        uint256 startTime;
        uint256 endTime;
        uint256 totalNumberOfOption;
        string questionURI;
    }

    event QuestionCreated(Question question);

    mapping(uint256 => Question) public questions;
    uint256 public questionCount;

    // Constructor
    constructor() {
        questionCount = 0;
    }

    function createQuestion(Question memory _question) public {
        questionCount++;
        questions[questionCount] = _question;

        emit QuestionCreated(_question);
    }

    function getQuestion(
        uint256 questionId
    ) public view returns (Question memory) {
        return questions[questionId];
    }
}
