// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract EventRegistry {
    struct Event {
        string posterURL;
        string name;
        string date;
        string description;
        address contractAddress;
        string roomId;
    }

    mapping(address => uint256) private userEventCount;
    mapping(address => mapping(uint256 => Event)) private events;
    Event[] private allEvents;

    function createEvent(
        string memory _posterURL,
        string memory _name,
        string memory _date,
        string memory _description,
        address _contractAddress,
        string memory _roomId
    ) public {
        Event memory newEvent = Event({
            posterURL: _posterURL,
            name: _name,
            date: _date,
            description: _description,
            contractAddress: _contractAddress,
            roomId: _roomId
        });

        events[msg.sender][userEventCount[msg.sender]] = newEvent;
        userEventCount[msg.sender]++;
        allEvents.push(newEvent);
    }

    function getEventsByUser(address _user) public view returns (Event[] memory) {
        uint256 count = userEventCount[_user];
        Event[] memory userEvents = new Event[](count);
        for (uint256 i = 0; i < count; i++) {
            userEvents[i] = events[_user][i];
        }
        return userEvents;
    }

    function getAllEvents() public view returns (Event[] memory) {
        return allEvents;
    }
}
