#---
# Excerpted from "Test-Driving JavaScript Applications",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
#---
curl -w "\n" -X GET http://localhost:3000/tasks
curl -w "\n" -X POST -H "Content-Type: application/json" \
  -d '{"name": "Practice TDD", "month": 8, "day": 10, "year": 2016}' \
  http://localhost:3000/tasks
curl -w "\n" -X GET http://localhost:3000/tasks
curl -w "\n" -X DELETE http://localhost:3000/tasks/...