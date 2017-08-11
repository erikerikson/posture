  import mapLines from './mapLines'

  it('assigns line numbers to keys', () => {
    const json = `{
      "two": 2,
      "three": {
        "four": [
          {
            "six": 6
          },
          {
            "nine": 9
          }
        ],
        "twelve": 12
      },
      "fourteen": 14,
      "fifteen": 15,
      "sizteen": {
        "seventeen": 17
      },
      "nineteen": [
        {
          "twenty-one": 21,
          "twenty-two": 22
        },
        {
          "twenty-five": 25
        }
      ],
      "twenty-eight": 28
    }`

    const expectedMap = {
      'root': 0,
      'root_two': 2,
      'root_three': 3,
      'root_three_four': 4,
      'root_three_four_six': 6,
      'root_three_four_nine': 9,
      'root_three_twelve': 12,
      'root_fourteen': 14,
      'root_fifteen': 15,
      'root_nineteen': 19,
      'root_nineteen_twenty-five': 25,
      'root_nineteen_twenty-one': 21,
      'root_nineteen_twenty-two': 22,
      'root_sizteen': 16,
      'root_sizteen_seventeen': 17,
      'root_twenty-eight': 28
    }

    expect(mapLines(json)).toEqual(expectedMap)
  })
