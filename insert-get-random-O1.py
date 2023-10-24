import random
class RandomizedSet:

    def __init__(self):
        self.dict = {}      
        self.arr = [] 

    def insert(self, val: int) -> bool:
        temp = self.dict.get(val)
        if temp is not None:
            return False
        self.dict[val] = val
        arr.append(val)
        return True
        

    def remove(self, val: int) -> bool:
        temp = self.dict.get(val)
        if temp is not None:
            self.dict.pop(val)
            del 
            return True
        return False
        

    def getRandom(self) -> int:
        if(len(self.dict)):
            rand = random.randint(0, len(self.dict) - 1)
            return self.dict.get(list(self.dict)[rand])

        
