from django.urls import path
from vestidos import views

urlpatterns = [
    path('vestidos/', views.VestidoList.as_view(), name='vestido-list'),
]