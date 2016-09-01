require 'pry'
class Sieve

  def initialize(num)
    @num = num
  end

  def primes
    if @num < 2
      []
    else
      check_primes
    end
  end

  def check_primes
    all_possibilities = (2..@num).to_a
    all_possibilities.each do |number|
      all_possibilities = remove_next_prime(all_possibilities, number)
    end
    all_possibilities
  end

  def remove_next_prime(all_possibilities, specific_num)
    all_possibilities.map do |num|
      unless num%specific_num === 0  && num != specific_num
        num
      end
    end.compact
  end

end
