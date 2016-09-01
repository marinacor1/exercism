require 'pry'
class Prime
  def self.nth(num)
    primes = self.create_primes(num)
    primes[num]
  end

  def self.create_primes(num)
    max = 2 + (num * num)
    all_list = (2..max).to_a #get numbers to increase by at least hte index
    all_list.each do |num|
      all_list = self.remove_non_primes(all_list, num)
    end
    all_list
  end

  def self.remove_non_primes(all_list, specific_num)
    new_list = [1]
    all_list.each do |num|
      unless num%specific_num === 0 && num != specific_num
        new_list << num
      end
    end
    new_list.uniq.compact
  end
end
