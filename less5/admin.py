# from django.contrib import admin
from django.contrib import admin
# Register your models here.
from less5.models import ProductModel


class ProductModelAdmin(admin.ModelAdmin):
    list_display = ['productsname', 'id',]


admin.site.register(ProductModel, ProductModelAdmin, )
