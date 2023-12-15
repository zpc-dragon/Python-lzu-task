from django.contrib import admin
from .models import data

class dataAdmin(admin.ModelAdmin):
    list_display = ['username', 'token', 'dataset_name', 'dataset_created_time',
                    'dataset_updated_time', 'img_name', 'img_created_time', 'img_class', 'img_show']
    list_filter = ['username','dataset_name']

admin.site.register(data, dataAdmin)
