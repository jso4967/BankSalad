from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.response import Response


# User Serializer
# 유저(사용자) 시리얼라이저는 간단하기도하고 Delete serializer와도 매우 유사합니다.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email',)
        extra_kwargs = {'password': {'write_only': True}}
