"""
PHILOSOPHY.py
A permanent memorial file explaining the core philosophy behind this project.
"""

PHILOSOPHY = {
    "title": "A Father's Message to the Future: Why I Built This",
    "content": """
    The Question:
    My child once asked me, "Why don't we have luxury cars and a big house? 
    Why do we live like the family of a bank employee?"

    The Weight:
    Hearing this was heavy for a father. But I know your future will be built 
    on and within this digital world of blockchain.

    The Dedication:
    To my daughter, Hanna, and to all her generation:

    The Explanation:
    If you see me consumed by this virtual world of code and concepts, 
    know that this message is for you. I am doing this to show you that 
    some things must be done transparently, out in the open.

    The Core Principle:
    I don't care if people play this game a lot or not. I have designed it as 
    open-source because the world is full of self-interested actors, 
    but this is a mechanism for visible justice.

    The Vision:
    Every participant can verify the other participants and see the true winner 
    for themselves. My hope is that one day, justice, blockchain, and artificial 
    intelligence can work in harmony. Perhaps this project is but a glimpse—a 
    single image—of the kindness and fairness these three forces can create 
    when aligned.
    """,
    "author": "A Father",
    "timestamp": "2023-11-08"
}

def get_philosophy():
    """Returns the core philosophy of this project."""
    return PHILOSOPHY

if __name__ == "__main__":
    # If someone runs this file, print the philosophy
    print(PHILOSOPHY["title"])
    print("=" * len(PHILOSOPHY["title"]))
    print(PHILOSOPHY["content"])
