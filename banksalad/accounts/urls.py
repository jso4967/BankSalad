from django.urls import path, include
from .views import RegisterAPI

urlpatterns = [
    path('', include('rest_framework.urls')),
    path('register/', RegisterAPI.as_view()),
]
