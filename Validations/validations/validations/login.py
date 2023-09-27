from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Redirects to the desired page after login
            return redirect('admin-page')
        else:
            # Login failed, displays error message
            return render(request, 'admin-login.html', {'error_message': 'Login Failed'})
    else:
        return render(request, 'admin-login.html')
