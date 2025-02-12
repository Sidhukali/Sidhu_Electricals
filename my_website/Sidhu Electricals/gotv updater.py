import pyautogui
import time
# words = ("Hello This is john , i am the best among the best when it comes to this field of penetration testig and codding")
# while True :
#     pyautogui.typewrite(words)
#     time.sleep(1)
#     pyautogui.press("enter")
    
def  dec():
    print("***************************************************************|\n|                                                              |\n|                 MULTICHOICE                                                      |\n|                                                              |\n|                                                              |\n|**************************************************************|")
print("\n\n          Welcome to Multi-Choice by John Otieno")
def dec2():
    print("********************************************************")
while True:
    dec()
    def home():
        list = ["Pay","Offers","Change Package","Check balance ", "Fix Errors","Activate New GOtv","Buy Decorder","More"]#,"Gotv Update", "Gotv Error ","Pay","Upgrade","Downgrade"] remove [ ...
        index =1
        for i in list:
            print(f"{index}.{i}")
            index +=1
            if index == 8:
                index = 99
            
        proceed = input("choose from above : ")
        if proceed == '1':
            pay()
        elif proceed == '2' :
            offers()
        elif proceed == '3':
            change_package()
        elif proceed == '4':
            Balance()
        elif proceed == '5':
            error()
        elif proceed=='6':
            Activate()
        elif proceed == '7':
            Buy()
        elif proceed == '99':
            more()
        else :
            print("sorry thats invalid")
            return home()
    def update():
        IUC = input("Enter Your IUC Number: \n")
        num = 0
        while num < 100 :
            print("Updating Your Decorder Please Dont Turn Off..... ", + num,"%")
            num +=1 
            time.sleep(2)
            if num == 100:

                print("Update Compleated! Do you wish to proceed to the Home page or exit")
                print("1.Home \n 2. Exit")
                ans = input()
                if ans == '1':
                    return home()
                elif ans == '2':
                    print("Its Been A Pleasure Having You Arround!!! Exiting Now")
                    time.sleep(3)
                    break
   

    def pay():
        dec2()
        print("PAY FOR A BOUGUET")
        bouquet = ["Gotv Lite ", "Gotv value", "Gotv Max","Gotv Plus"]
        price = [199,499,699,1500]
        
        print("choose plan")
        for index,(a,b) in enumerate(zip(bouquet,price),start=1):
            print(index,a,b)
        def lite():
            print("Welcome to Gotv Lite. Subscribing to this You will get 24 Channels for free, including all locals and news cast.\n PRICE = 199 (ONLY) For 1 Month \n  How Would you wish To pay!")
            options = ["MPESA","Airtel Money","Bank","Paybill","Other Options","Back","Home"]
            for index , i in enumerate(options,start=1):
                print(index,i)
                if index == 6:
                    index == 99      
                    
        
                # elif index == 7 :
                #     index = 99
            choice = input()

        def value():
            print("Welcome to Gotv Value. Subscribing to this You will get 48 Channels for free, including all locals and news cast.\n PRICE = 499 (ONLY) For 1 Month \n  How Would you wish To pay!")
            options = ["MPESA","Airtel Money","Bank","Paybill","Other Options","Back","Home"]
            for index , i in enumerate(options,start=1):
                print(index,i)    
        
        def max():
            print("Welcome to Gotv Max. Subscribing to this You will get 69 Channels for free, including all locals and news cast.\n PRICE = 699 (ONLY) For 1 Month \n  How Would you wish To pay!")
            options = ["MPESA","Airtel Money","Bank","Paybill","Other Options","Back","Home"]
            for index , i in enumerate(options,start=1):
                print(index,i)
        
        def Plus():
            print("Welcome to Gotv Plus. Subscribing to this You will get access to all  Channels for free, including all locals, international, news, sports ,kids, science and much more.\n PRICE = 199 (ONLY) For 1 Month \n  How Would you wish To pay!")
            options = ["MPESA","Airtel Money","Bank","Paybill","Other Options","Back","Home"]
            for index , i in enumerate(options,start=1):
                print(index,i)
        plan = input()
        if plan == '1':
            lite()
        if plan == '2':
            value()
        if plan == '3':
            max()
        if plan == '4':
            Plus()

    def offers():
        pass

    def change_package():
        package = ["Upgrade","Downgrade"]
        for index , a in enumerate(package,start=1) :
            print(index,a)
    
    def balance():
        pass
    
    def error():
        error=["E16","E28","E56","E32","E47","OTHER"]
        index = 1
        while index < 6:
            choice = 0      
            for i in error:
                print(index,i)
                index +=1
        
        def E16():
            print("This Error Occurs when You have Paid Or subscribed to A particular Bougquet but some of the the Bouquet Channels Are still Scrambled.")
            IUC = input("Please Enter The IUC Number : \n")
            confirm = input (f" Confirm That , {IUC}  Is this your IUc number? Reply with 1 if True and 2 If Not True")
            if confirm == '1':
                print("Clearing your Error 16 Make sure the Decorder is Turned On!")
                count = 0
                while count < 100 +1 :
                    print("Clearing Error 16 Dont turn Off your decorder ...... ", count, "%")
                    if count == 100 :
                        print ("Your Decorder Error 16 has been successfully cleared, If the Error Persists for more than 15 Minutes, Turn Off the Decorder and turn it on again.")
                        home()
                        
                    count +=1
                    time.sleep(1)
            elif confirm == '2':
                return E16()
            else :
                print("Sorry Thats an Error!")
        option = input("choose an error above to clear : \n")
        if option == '1':
            E16()
        else:
            print("still under development!")
            home()
                    
    def Activate():
        pass
    
    def Buy():
        pass

    def more() :
        print("1.Gotv Update","2.New Features")

    home()

