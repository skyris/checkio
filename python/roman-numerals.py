def checkio(data):
    output = ""
    grades = (1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1)
    latin = ("M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V","IV", "I")
    for i in range(len(grades)):
        while data - grades[i] >= 0:
            data -= grades[i]
            output += latin[i]
    return output



if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert checkio(6) == 'VI', '6'
    assert checkio(76) == 'LXXVI', '76'
    assert checkio(499) == 'CDXCIX', '499'
    assert checkio(3888) == 'MMMDCCCLXXXVIII', '3888'