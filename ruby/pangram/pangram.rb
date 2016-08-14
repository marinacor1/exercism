require 'pry'
class Pangram

  def self.is_pangram?(str)
    if str.length < 26
      false
    else
      letter_count = Hash.new()
      letters = str.split('')
      counter = 0
      letter_count = self.create_count(letters, letter_count, counter)
      x = self.all_letters(letter_count)
    end
  end

  def self.create_count(letters, letter_count, counter)
    letters.each do |letter|
      if letter_count.keys.include?(letter)
        letter_count[letter] = counter + 1
      else
        letter_count[letter] = counter
      end
      letter_count
    end
    letter_count
  end

  def self.all_letters(letter_count)
    new_array = self.remove_empty_strings(letter_count)
    new_array.length == 26
  end

  def self.remove_empty_strings(letter_count)
    array = letter_count.keys
    new_array = []
    array.each  do |letter|
      unless letter == " "
        new_array << letter
      end
    end
    new_array
  end

end
