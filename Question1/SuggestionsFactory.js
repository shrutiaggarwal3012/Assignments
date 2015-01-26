(function(){
    'use strict';
    angular.module('mobileApp')
    .factory('suggestionFactory',[suggestionFactory]);

    function suggestionFactory(){ 

        var CustomCounter = function(min, max) {
            this.min = min.slice(0)
            this.max = max.slice(0)
            this.curr = this.min.slice(0)
            this.length = this.min.length
        }

        CustomCounter.prototype.increment = function() {
            for (var i = this.length - 1, ii = 0; i >= ii; i--) {
                this.curr[i] += 1
                if (this.curr[i] > this.max[i]) {
                    this.curr[i] = 0
                } else {
                    break
                }
            }
        }

        CustomCounter.prototype.is_max = function() {
            for (var i = 0, ii = this.length; i < ii; ++i) {
                if (this.curr[i] !== this.max[i]) {
                    return false
                }
            }
            return true
        }

        var PhoneNumber = function(phone_number) {
            this.phone_number = phone_number
            this.combinations = []
        }

        PhoneNumber.keypad = [
                            {key : 1, values : []},
                            {key : 2, values : ['A','B','C']},
                            {key : 3, values : ['D','E','F']},
                            {key : 4, values : ['G','H','I']},
                            {key : 5, values : ['J','K','L']},
                            {key : 6, values : ['M','N','O']},
                            {key : 7, values : ['P','Q','R','S']},
                            {key : 8, values : ['T','U','V']},
                            {key : 9, values : ['W','X','Y','Z']},
                            {key : 10, values : []},
                            {key : 11, values : []},
                            {key : 12, values : []},
                         ];

        PhoneNumber.prototype.get_combination_by_digit = function(digit) {
            return PhoneNumber.keypad[digit -1 ].values;
        }

        PhoneNumber.prototype.add_combination_by_indexes = function(indexes) {
            var combination = ''
            for (var i = 0, ii = indexes.length; i < ii; ++i) {
                var phone_number_digit = this.phone_number[i]
                combination += this.get_combination_by_digit(phone_number_digit)[indexes[i]]
            }

            this.combinations.push(combination)
        }

        PhoneNumber.prototype.update_combinations = function() {
            var min_indexes = []
              , max_indexes = []

            for (var i = 0, ii = this.phone_number.length; i < ii; ++i) {
                var digit = this.phone_number[i]
                min_indexes.push(0)
                max_indexes.push(this.get_combination_by_digit(digit).length - 1)
            }

            var c = new CustomCounter(min_indexes, max_indexes)

            while(true) {
                this.add_combination_by_indexes(c.curr)
                c.increment()

                if (c.is_max()) {
                    this.add_combination_by_indexes(c.curr)
                    break
                }
            }
        }

        var o =  {PhoneNumber : PhoneNumber};
        return o ;
    }
})();