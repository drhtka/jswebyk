# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse
from less5.models import ProductModel

def JstDef5(request):
    return TemplateResponse(request, 'less5/html5.html')

def JsDefDz5(request):
    all_products = ProductModel.objects.values_list()
    print(all_products)
    return render(request, 'less5/htdz5.html', {'all_products': all_products})
