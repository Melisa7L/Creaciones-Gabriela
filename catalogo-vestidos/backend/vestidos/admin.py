from django.contrib import admin
from .models import Vestido

class VestidoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion', 'imagen')
    search_fields = ('nombre', 'descripcion')

admin.site.register(Vestido, VestidoAdmin)