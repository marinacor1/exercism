require 'pry'
class Sieve

  def initialize(num)
    @num = num
    @all_possibilites = [2]
  end

  def primes
    if @num < 2
      []
    else
      check_primes
    end
  end

  def check_primes
    new_possibilites = build_numbers(2)
    non_doubles = remove_doubles(new_possibilites)
    non_fifths = remove_fifths(non_doubles)
  end

  def build_numbers(current_num)
    if current_num < @num
      @all_possibilites << current_num
      current_num ++
      build_numbers
    else
      @all_possiblities = [2]
    end
  end

  def remove_doubles(new_possibilites)
    non_doubles = [2]
    new_possibilites.each do |number|
      if number%2 != 0 && number%3 !=0
        non_doubles << number
      end
    end
    non_doubles
  end

  def remove_fifths(non_doubles)
    non_fifths = []
    non_doubles.each do |number|
      if number%5 != 0 && number%7 != 0
        non_fifths << number
      end
    end
  end

end
