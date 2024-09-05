#!/usr/bin/python3
"""
Prime game winner determination
between Maria and Ben
"""


def isWinner(x, nums):
    """
    x - rounds
    nums - numbers list
    """
    if x < 1 or not nums:
        return None

    maria_wins = 0
    ben_wins = 0

    n = max(nums)
    primes = [True] * (n + 1)
    primes[0] = primes[1] = False

    for i in range(2, int(n**0.5) + 1):
        if primes[i]:
            for j in range(i**2, n + 1, i):
                primes[j] = False

    for num in nums:
        count = sum(primes[2:num+1])
        if count % 2 == 0:
            ben_wins += 1
        else:
            maria_wins += 1

    if maria_wins == ben_wins:
        return None

    return 'Maria' if maria_wins > ben_wins else 'Ben'
