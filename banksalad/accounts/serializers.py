from rest_framework import serializers
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_phone_number(value):
    if not isinstance(value, str):
        raise ValidationError(
            _('%(value)s is not string type'),
            params={'value': value},
        )
    value = value.split('-')
    for numbers in value:
        if numbers.__len__() == 3 and numbers == "010":
            pass
        elif numbers.__len__() == 4:
            for n in list(numbers):
                n = int(n)
                if not 0 <= n and n <= 9:
                    raise ValidationError(
                        _('%(value)s is not phone number format'),
                        params={'value': value},
                    )
        else:
            raise ValidationError(
                _('%(value)s is not phone number format'),
                params={'value': value},
            )


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password',)
        extra_kwargs = {'password': {'write_only': True}}

    def validate_password(self, value):
        validate_phone_number(value)
