from rest_framework import serializers
from .models import Vestido

class VestidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vestido
        fields = ['id', 'nombre', 'descripcion', 'imagen_url']