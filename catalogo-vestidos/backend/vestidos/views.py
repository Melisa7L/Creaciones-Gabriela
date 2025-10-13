from rest_framework import viewsets
from rest_framework.response import Response
from .models import Vestido
from .serializers import VestidoSerializer

class VestidoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Vestido.objects.all()
    serializer_class = VestidoSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)