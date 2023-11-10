# def remove_blanks(str):
#     str=str.split(' ')
#     for i in range(len(str)):
#         if str[i] == ' ':
#             for j in range(i,len(str)-1):
#                 temp=str[j]
#                 str[j]=str[j+1]
#                 str[j+1]=temp
#             str[:-1]

#     return_str=''
#     for char in str:
#         return_str+=char
#     return return_str

# spaced_str = " Pl ayTha tF u nkyM usi c "
# close_str = remove_blanks(spaced_str)
# print(close_str)

# def getDigits(str):
#     digits=['0','1','2','3','4','5','6','7','8','9']
#     str_arr=list(str)

#     i=0
#     while(i < len(str_arr)-1):
#         if str_arr[i] not in digits:
#             for j in range(i,len(str_arr)-1):
#                 temp=str_arr[j]
#                 str_arr[j]=str_arr[j+1]
#                 str_arr[j+1]=temp
#             str_arr.pop()
#         i+=1

#     return_str=''
#     for char in str_arr:
#         return_str+=char
#     return return_str

# alpha_num = "0s1a3y5w7h9a2t4?6!8?0"
# num_only = getDigits(alpha_num)
# print(num_only)

# def acronyms(str):
#     str_arr=str.split(' ')
#     return_arr=[]
#     for word in str_arr:
#         if word != '':
#             return_arr.append(word[0])
#     return_str=''
#     for char in return_arr:
#         return_str+=char.upper()
#     return return_str

# word1 = " there's no free lunch - gotta pay yer way. "
# word2 = "Live from New York, it's Saturday Night!"
# acro1 = acronyms(word1)
# acro2 = acronyms(word2)
# print(f"{acro1}\n\n{acro2}")


# def zip(arr1, arr2):
#     dict={}
#     for i in range(len(arr1)):
#         dict[str(arr1[i])]=arr2[i]
#     return dict


# arr1 = ["abc", 3, "yo"]
# arr2 = [42, "wassup", True]

# new_dict = zip(arr1, arr2)
# print(new_dict)



def invert_hash(dict):
    new_dict={}
    for key,value in dict.items():
        new_dict[value]=key
    return new_dict

old_dict =  {"name": "Zaphod", "charm": "high", "morals": "dicey"}

rev_dict = invert_hash(old_dict)
print(rev_dict)