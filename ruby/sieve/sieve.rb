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
    index = 0
    all_possibilites = (2..@num).to_a
    if index < all_possibilites.length
      all_possibilites = remove_next_prime(all_possibilites, all_possibilites[index])
      index += 1
    end
  end

  def remove_next_prime(all_possibilites, specific_num)
  end

end
