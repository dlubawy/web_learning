numbers = []
for i in 0..999
  if i%3 == 0 || i%5 == 0
    numbers.push(i)
  end
end
puts numbers.inject(0){|sum, n| sum + n}
