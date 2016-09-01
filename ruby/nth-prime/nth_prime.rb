require 'pry'
class Prime
  def self.nth(limit)
    @limit = limit
    primes = self.create_primes
    binding.pry
    primes[@limit]
  end

  def self.create_primes
    # max = num + 1 #this is wrong
    # all_list = (2..max).to_a
    all_list = [1]
    all_list.each do |num|
      all_list = self.remove_non_primes(all_list, num) #the same array keeps getting passed in
    end
    binding.pry
    all_list
  end

  def self.check_length(all_list, number)
    if all_list.length < @limit + 2
      all_list << number + 1
      number = number + 1
      check_length(all_list, number)
    end
    all_list.uniq
  end

  def self.remove_non_primes(all_list, specific_num)
    new_list = [1]
    all_list.each do |num|
      binding.pry
      unless num%specific_num === 0 && num != specific_num
        new_list << num
      end
    end
    new_list.uniq.compact
    number = 0
    new_list = check_length(new_list, number)

  end
end
