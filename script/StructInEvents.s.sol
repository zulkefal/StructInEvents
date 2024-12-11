// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "../lib/forge-std/src/Script.sol";
import {StructInEvents} from "../src/StructInEvents.sol";

contract DeployStructInEvents is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        StructInEvents.Question
            memory _questionParams = createBase_DataRequest_Question();

        StructInEvents instance = new StructInEvents();
        instance.createQuestion(_questionParams);

        vm.stopBroadcast();
    }

    function createBase_DataRequest_Question()
        internal
        pure
        returns (StructInEvents.Question memory)
    {
        return
            StructInEvents.Question({
                questionType: StructInEvents.QuestionTypes.DataRequest,
                dealSize: 100,
                noOfOracles: 10,
                rewardPerOracle: 3,
                loyaltyFee: 0,
                priceCostPerSide: 0,
                numberOfSides: 0,
                creator: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,
                loyalty: true,
                totalQuestionCost: 50,
                totalRewardAmount: 0,
                sidesWhoJoined: 0,
                startTime: 1,
                endTime: 120,
                totalNumberOfOption: 4,
                questionURI: "jasjvdhjakhjhsdajkj"
            });
    }
}
