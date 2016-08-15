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
    new_possibilites = (2..@num).to_a
    non_doubles = remove_doubles(new_possibilites)
    non_triples = remove_triples(non_doubles)
    non_fifths = remove_fifths(non_triples)
    non_sevenths = remove_sevenths(non_fifths)
  end

  def remove_doubles(new_possibilites)
    non_doubles = []
    new_possibilites.each do |number|
      if number == 2
        non_doubles << number
      end
      if number%2 != 0
        non_doubles << number
      end
    end
    non_doubles
  end

  def remove_triples(non_doubles)
    non_triples = []
    non_doubles.each do |number|
      if number == 3
        non_triples << number
      end
      if number%3 != 0
        non_triples << number
      end
    end
    non_triples
  end

  def remove_fifths(non_triples)
    non_fifths = []
    non_triples.each do |number|
      if number == 5
        non_fifths << number
      end
      if number%5 != 0
        non_fifths << number
      end
    end
  end

  def remove_sevenths(non_fifths)
    non_sevenths = []
    non_fifths.each do |number|
      if number ==7
        non_sevenths << 7
      end
      if number%7 != 0
        non_sevenths << number
      end
    end
  end

end
