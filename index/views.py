from django.shortcuts import render

# Create your views here.
from django.views.generic.base import View
from less5.models import ProductModel

class IndexView(View):

    def get(self, request):
        all_products = ProductModel.objects.values_list()
        print(all_products)
        return render(request, 'index/index.html')