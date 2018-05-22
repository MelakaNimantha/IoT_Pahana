from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

def home(request):
    if not(request.user.is_anonymous):
        return redirect("menu")
    else:
        return render(request, 'home.html')

def signup(request):
    if 'eMessage' in request.session.keys():
        page = render(request, "signup.html", {"error":request.session['eMessage']})
        del request.session['eMessage']
    else:
        page = render(request, "signup.html")
    return page

def signin(request):
    if 'eMessage' in request.session.keys():
        page = render(request, "login.html", {"error":request.session['eMessage']})
        del request.session['eMessage']
    else:
        page = render(request, "login.html")
    return page

def signupreq(request):
    username = request.POST['username'].strip()
    u, created = User.objects.get_or_create(username=username)
    if created:
        first_name = request.POST['first_name'].strip()
        last_name = request.POST['last_name'].strip()
        password = request.POST['password'].strip()

        u.set_password(password)
        u.first_name = first_name
        u.last_name = last_name 

        u.save()
        return redirect("signin")
    else:
        request.session['eMessage'] = "Username already exists."
        return redirect('signup')

def signinreq(request):
    username = request.POST['username'].strip()
    password = request.POST['password'].strip()
    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request, user)
        return redirect("menu")
    else:
        request.session['eMessage'] = "Invalid authentication data"
        return redirect("signin")

def signout(request):
    logout(request)
    return redirect('home')

def menu(request):
    if request.user.is_anonymous:
        return redirect('signin')
    else:
        return render(request, "menu.html", {'user': request.user})
        

def lightup(request):
    if request.user.is_anonymous:
        return redirect('signin')
    else:
        return render(request, "light.html")

def lightOn(request):
    #do what ever message passing to your device
    print("on")
    return render(request, "light.html", {'status': 'on'})

def lightOff(request):
    #do what ever message passing to your device
    print("off")
    return render(request, "light.html", {'status': 'off'})

def lamp(request):
    return render(request,"lamp.html",{'user' : request.user})