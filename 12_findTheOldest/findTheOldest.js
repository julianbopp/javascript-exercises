const findTheOldest = function(people) {

    return people.reduce(function (oldest, current) {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        if (oldestAge < currentAge) {
            return current;
        } else {
            return oldest;
        }
    })
};

const getAge = function(yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) {
        return new Date().getFullYear() - yearOfBirth;
    } else {
        return yearOfDeath - yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
