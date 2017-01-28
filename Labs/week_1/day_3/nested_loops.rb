# sets = 1
# sets = 1
# sets_limit = 4

# while (sets<=sets_limit)
#   puts "Set: #{sets}"
#   sets+=1
#   reps = 1
#   reps_limit = 12
#   while(reps<=reps_limit)
#     puts "Rep: #{reps}"
#     reps+=1
#   end 
#   puts "Well done, have a rest!"

# end


while(true)
  puts "type something: "
  line = gets.chomp
  break if(line.downcase == 'q')
  puts "you typed: #{line}"
end



