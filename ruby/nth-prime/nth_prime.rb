require 'pry'
class Prime
  def self.nth(num)
    primes = self.create_primes(num)
    primes[num]
  end

  def self.create_primes(num)
    max = 2 + (num * num)
    all_list = (2..max).to_a #get numbers to increase by at least hte index
    binding.pry
    all_list.each do |num|
      all_list = self.remove_non_primes(all_list, num)
    end
    all_list
  end

  def self.remove_non_primes(all_list, specific_num)
    all_list.map do |num|
      unless num%specific_num === 0 && num != specific_num
        num
      end.compact
    end
  end
end
