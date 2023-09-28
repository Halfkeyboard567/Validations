from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

def base(request):
    return render(request, 'base.html')

def stndt(request):
    return render(request, 'new_students_application.html')

def home(request):
    return render(request, 'home.html')

def select_role(request):
    return render(request, 'select-role.html')

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('admin-page.html')
        else:
            return render(request, 'admin-login.html', {'error_message': 'Login Failed'})
    else:
        return render(request, 'admin-login.html')

def admin_page(request):
    return render(request, 'admin-page.html')

